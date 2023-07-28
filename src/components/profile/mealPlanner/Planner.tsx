// import { cookies } from 'next/headers';
import { DayPilot, DayPilotScheduler } from 'daypilot-pro-react';
import { useEffect, useRef, useState } from 'react';
import MoveBtns from '~/components/profile/mealPlanner/MoveBtns';
import { formatMeals } from '~/utils/helpers';

interface Props {
  mealPlan: mealPlanType;
}

export default function Planner({ mealPlan }: Props) {
  console.log({ ...mealPlan.week });
  const formatted = formatMeals(mealPlan);
  console.log('formatted meal from Planner');
  console.log(formatted);
  const [config, setConfig] = useState<DayPilot.SchedulerConfig>({
    startDate: DayPilot.Date.today().firstDayOfWeek(),
    weekStarts: 1,
    days: 7,
    scale: 'Day',
    eventHeight: 100,
    // timeHeaders: [{ groupBy: 'Week' }, { groupBy: 'Cell' }],
    timeHeaders: [{ groupBy: 'Month' }, { groupBy: 'Day', format: 'd' }],
    // timeHeaders: [{ groupBy: 'Month' }, { groupBy: 'Day', format: 'd' }],
    cellWidth: 200,
    resources: [
      { name: 'Breakfast', id: 'A' },
      { name: 'Lunch', id: 'B' },
      { name: 'Dinner', id: 'C' },
    ],
    // events2:formatted.meals.map(item=>({id:item.id,text:item.title,start})),
    events: [
      {
        id: mealPlan.week.monday.meals[0].id,
        text: mealPlan.week.monday.meals[0].title,
        start: DayPilot.Date.today().firstDayOfWeek(1),
        end: DayPilot.Date.today().firstDayOfWeek(1),
        resource: 'A',
        servings: mealPlan.week.monday.meals[0].servings,
        readyInMinutes: mealPlan.week.monday.meals[0].readyInMinutes,
        sourceUrl: mealPlan.week.monday.meals[0].sourceUrl,
        barColor: '#3d85c6',
      },
      {
        id: mealPlan.week.monday.meals[1].id,
        text: mealPlan.week.monday.meals[1].title,
        start: DayPilot.Date.today().firstDayOfWeek(1),
        end: DayPilot.Date.today().firstDayOfWeek(1),
        resource: 'B',
        servings: mealPlan.week.monday.meals[1].servings,
        readyInMinutes: mealPlan.week.monday.meals[1].readyInMinutes,
        sourceUrl: mealPlan.week.monday.meals[1].sourceUrl,
        barColor: '#3d85c6',
      },
      {
        id: mealPlan.week.monday.meals[2].id,
        text: mealPlan.week.monday.meals[2].title,
        start: DayPilot.Date.today().firstDayOfWeek(1),
        end: DayPilot.Date.today().firstDayOfWeek(1),
        resource: 'A',
        servings: 2,
        readyInMinutes: 45,
        sourceUrl:
          'https://spoonacular.com/persimmons-pumpkin-orange-smoothie-with-chia-seeds-655786',
        barColor: '#3d85c6',
      },
      {
        id: mealPlan.week.tuesday.meals[1].id,
        text: mealPlan.week.tuesday.meals[1].title,
        start: DayPilot.Date.today().firstDayOfWeek(1),
        end: DayPilot.Date.today().firstDayOfWeek(1),
        resource: 'C',
        servings: 2,
        readyInMinutes: 45,
        sourceUrl:
          'https://spoonacular.com/persimmons-pumpkin-orange-smoothie-with-chia-seeds-655786',
        barColor: '#3d85c6',
      },
      {
        id: mealPlan.week.tuesday.meals[2].id,
        text: mealPlan.week.tuesday.meals[2].title,
        start: DayPilot.Date.today().firstDayOfWeek(1),
        end: DayPilot.Date.today().firstDayOfWeek(1),
        resource: 'C',
        servings: 2,
        readyInMinutes: 45,
        sourceUrl:
          'https://spoonacular.com/persimmons-pumpkin-orange-smoothie-with-chia-seeds-655786',
        barColor: '#3d85c6',
      },
      {
        id: 2,
        text: 'Reservation 2',
        start: '2023-07-25T00:00:00',
        end: '2023-07-26T00:00:00',
        resource: 'C',
        barColor: '#38761d',
      },
      {
        id: 3,
        text: 'Reservation 3',
        start: '2023-07-25T00:00:00',
        end: '2023-07-25T00:00:00',
        resource: 'B',
        barColor: '#f1c232',
      },
    ],
    onEventMoved: async (args: DayPilot.SchedulerEventMovedArgs) => {
      schedulerRef.current!.control.message('Event moved: ' + args.e.data.text);
    },
    onEventResized: async (args: DayPilot.SchedulerEventResizedArgs) => {
      schedulerRef.current!.control.message(
        'Event resized: ' + args.e.data.text
      );
    },
    onTimeRangeSelected: async (
      args: DayPilot.SchedulerTimeRangeSelectedArgs
    ) => {
      const modal = await DayPilot.Modal.prompt(
        'New reservation:',
        'Reservation'
      );
      schedulerRef.current!.control.clearSelection();
      if (modal.canceled) {
        return;
      }
      schedulerRef.current!.control.events.add({
        id: DayPilot.guid(),
        text: modal.result,
        start: args.start,
        end: args.end,
        resource: args.resource,
      });
    },
    onEventClicked: async (args: any) => {
      let e = args.e;
      console.log(args);
      const modal = await DayPilot.Modal.prompt(
        'Edit reservation:',
        e.data.text
      );
      schedulerRef.current!.control.clearSelection();
      if (modal.canceled) {
        return;
      }
      e.data.text = modal.result;
      schedulerRef.current!.control.events.update(e);
    },
  });

  const schedulerRef = useRef<DayPilotScheduler>(null);

  useEffect(() => {
    if (schedulerRef.current) {
      schedulerRef.current.control.scrollTo('2023-11-01');
    }
  }, []);
  const onZoomChange = (args: { level: string }) => {
    console.log(config.startDate);
    switch (args.level) {
      case 'month':
        setConfig({
          ...config,
          startDate: DayPilot.Date.today().firstDayOfMonth(),
          days: DayPilot.Date.today().daysInMonth(),
          scale: 'Day',
        });
        break;
      case 'week':
        setConfig({
          ...config,
          startDate: DayPilot.Date.today().firstDayOfWeek(),
          days: 7,
          scale: 'Day',
        });
        break;
      default:
        throw new Error('Invalid zoom level');
    }
  };
  const onMoveBtns = (args: { move: string }) => {
    // console.log(config);
    switch (args.move) {
      case 'next':
        setConfig({
          ...config,
          startDate: (config.startDate as DayPilot.Date)
            .addMonths(1)
            .firstDayOfMonth(),
        });
        break;
      case 'previous':
        setConfig({
          ...config,
          startDate: (config.startDate as DayPilot.Date)
            .addMonths(-1)
            .firstDayOfMonth(),
        });
        break;
      case 'today':
        setConfig({
          ...config,
          startDate: DayPilot.Date.today(),
        });
        break;
      default:
        throw new Error('Invalid movement');
    }
  };

  // console.log('test console log');
  // const usernameCook = cookies().get('username');
  // console.log(usernameCook);
  // const onCreatePlan = async () => {
  //   'use server';
  //   const data = await getServerSession(authOptions);
  //   if (data?.user?.name) {
  //     cookies().set('username', 'john-smith6', { secure: true });
  //     const cookieStore = cookies();
  //     const usernameCook = cookieStore.get('username');
  //     revalidatePath('/profile')
  //     console.log(usernameCook);
  //     const hashCook = cookieStore.get('hash');
  //     cookies().set('username', 'john-smith6', '/');
  //     cookies().set('hash', '39096f644f811bc2cdefc9864c81b0fb07aad305', '/');
  //     console.log(usernameCook);
  //     console.log(hashCook);
  //       if (usernameCook === undefined || usernameCook.name.length < 0) {
  //         const { name, email } = data.user;
  //         const userData = await userAuth({
  //           username: name,
  //           firstName: name.split(' ')[0],
  //           lastName: name.split(' ')[1],
  //           email,
  //         });
  //         if (!userData) return console.error('Could not fetch userData');
  //         const { hash, username } = userData.data;
  //         cookies().set('username', username);
  //         cookies().set('hash', hash);

  //       }
  //   } else alert('you are not logged in');
  // };
  return (
    <div>
      <div>
        <div className='toolbar'>
          <MoveBtns onZoomChange={onZoomChange} onMoveBtns={onMoveBtns} />
        </div>
        <DayPilotScheduler {...config} ref={schedulerRef} />
      </div>
    </div>
  );
}
