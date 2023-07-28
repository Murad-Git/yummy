import {
  Button,
  Eventcalendar,
  formatDate,
  Input,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventClickEvent,
  Popup,
  SegmentedGroup,
  SegmentedItem,
  setOptions,
  snackbar,
  Textarea,
} from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { formatMeals2 } from '~/utils/helpers';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

const types = [
  {
    id: 1,
    name: 'Breakfast',
    color: '#e20f0f',
    kcal: '300 - 400 kcal',
    icon: '☕ ',
  },
  {
    id: 2,
    name: 'Lunch',
    color: '#32a6de',
    kcal: '500 - 700 kcal',
    icon: '🍜 ',
  },
  {
    id: 3,
    name: 'Dinner',
    color: '#e29d1d',
    kcal: '400 - 600 kcal',
    icon: '🥗 ',
  },
];

const viewSettings: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventList: true,
  },
};

const responsivePopup = {
  medium: {
    display: 'center',
    width: 400,
    fullScreen: false,
    touchUi: false,
    showOverlay: false,
  },
};

interface Props {
  mealPlan: mealPlanType;
}

export default function Planner2({ mealPlan }: Props) {
  const [myMeals, setMyMeals] = useState<MbscCalendarEvent[]>([]);
  // const [myMeals, setMyMeals] = useState<MbscCalendarEvent[]>([]);
  const [tempMeal, setTempMeal] = useState<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [calories, setCalories] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [headerText, setHeader] = useState<string>('');
  const [type, setType] = useState<any>(1);
  const { push } = useRouter();

  console.log('mealPlan');
  console.log(mealPlan);

  useEffect(() => {
    const testingResults = formatMeals2(mealPlan);
    console.log('testingResults');
    console.log(testingResults);
    setMyMeals(testingResults);
    // getJson(
    //   'https://trial.mobiscroll.com/meal-planner/',
    //   (events: MbscCalendarEvent[]) => {
    //     setMyMeals(events);
    //   },
    //   'jsonp'
    // );
  }, []);

  const saveEvent = useCallback<any>(() => {
    const newEvent = {
      id: tempMeal.id,
      title: name,
      calories: calories,
      notes: notes,
      start: tempMeal.start,
      end: tempMeal.end,
      resource: tempMeal.resource,
    };

    if (isEdit) {
      // update the event in the list
      const index = myMeals.findIndex((x) => x.id === tempMeal.id);
      const newEventList = [...myMeals];

      newEventList.splice(index, 1, newEvent);
      setMyMeals(newEventList);
    } else {
      // add the new event to the list
      setMyMeals([...myMeals, newEvent]);
    }

    // close the popup
    setOpen(false);
  }, [isEdit, myMeals, calories, notes, name, tempMeal]);

  const deleteEvent = useCallback(
    (event: MbscCalendarEvent) => {
      setMyMeals(myMeals.filter((item) => item.id !== event.id));
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              setMyMeals((prevEvents) => [...prevEvents, event]);
            },
            text: 'Undo',
          },
          message: 'Event deleted',
        });
      });
    },
    [myMeals]
  );

  const loadPopupForm = useCallback((event: MbscCalendarEvent) => {
    setName(event.title || 'Name');
    setCalories(event.calories);
    setNotes(event.notes);
  }, []);

  // handle popup form changes

  const nameChange = useCallback((ev: MbscCalendarEvent) => {
    setName(ev.target.value);
  }, []);

  const caloriesChange = useCallback((ev: MbscCalendarEvent) => {
    setCalories(ev.target.value);
  }, []);

  const notesChange = useCallback((ev: MbscCalendarEvent) => {
    setNotes(ev.target.checked);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempMeal);
    setOpen(false);
  }, [deleteEvent, tempMeal]);

  // scheduler options
  const onEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      const event = args.event;
      console.log('click to', event.link);
      push(event.link);
      // redirect(event.link);
      // setHeader(
      //   '<div>New meal</div><div class="md-meal-type">' +
      //     formatDate('DDDD, DD MMMM YYYY', new Date(event.start as string)) +
      //     '</div>'
      // );
      // setType(event?.resource?.toString());
      // setEdit(true);
      // setTempMeal({ ...event });
      // // fill popup form with event data
      // loadPopupForm(event);
      // setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventCreated = useCallback(
    (args: any) => {
      const event = args.event;
      const resource: any = types.find((obj) => {
        return obj.id === event.resource;
      });
      setHeader(
        '<div>' +
          resource.name +
          '</div><div class="md-meal-type">' +
          formatDate('DDDD, DD MMMM YYYY', new Date(event.start)) +
          '</div>'
      );
      setType(event.resource.toString());
      setEdit(false);
      setTempMeal(event);
      // fill popup form with event data
      loadPopupForm(event);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm]
  );

  const typeChange = useCallback(
    (ev: MbscCalendarEvent) => {
      const value = ev.target.value;
      setType(value);
      setTempMeal({ ...tempMeal, resource: +value });
    },
    [tempMeal]
  );

  const onEventDeleted = useCallback(
    (args: MbscCalendarEvent) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );

  // popup options
  const popupButtons = useMemo<any>(() => {
    if (isEdit) {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Save',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    } else {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Add',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const onClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyMeals([...myMeals]);
    }
    setOpen(false);
  }, [isEdit, myMeals]);

  const extendDefaultEvent = useCallback(() => {
    return {
      title: 'New meal',
      allDay: true,
    };
  }, []);

  const renderMyResource = (resource: MbscCalendarEvent) => {
    return (
      <div className='md-meal-planner-cont'>
        <div
          className='md-meal-planner-title'
          style={{ color: resource.color }}
        >
          <span
            className='md-meal-planner-icon'
            dangerouslySetInnerHTML={{ __html: resource.icon }}
          ></span>
          {resource.name}
        </div>
        <div className='md-meal-planner-kcal'>{resource.kcal}</div>
      </div>
    );
  };

  const myScheduleEvent = useCallback((args: MbscCalendarEventData) => {
    const event = args.original;
    return (
      <div className='md-meal-planner-event'>
        <div className='md-meal-planner-event-title'>
          {event && event.title}
        </div>
        {event && event.calories && (
          <div className='md-meal-planner-event-desc'>
            Calories {event.calories} kcal
          </div>
        )}
      </div>
    );
  }, []);
  console.log('myMeals');
  console.log(myMeals);
  return (
    <div>
      <Eventcalendar
        view={viewSettings}
        data={myMeals}
        resources={types}
        dragToCreate={false}
        dragToResize={false}
        dragToMove={true}
        clickToCreate={true}
        extendDefaultEvent={extendDefaultEvent}
        onEventClick={onEventClick}
        onEventCreated={onEventCreated}
        onEventDeleted={onEventDeleted}
        renderResource={renderMyResource}
        renderScheduleEventContent={myScheduleEvent}
        cssClass='md-meal-planner-calendar'
      />
      <Popup
        display='bottom'
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onClose}
        responsive={responsivePopup}
        cssClass='md-meal-planner-popup'
      >
        <SegmentedGroup onChange={typeChange} value={type}>
          {types.map((type) => {
            return (
              <SegmentedItem value={type.id.toString()} key={type.id}>
                {type.name}
              </SegmentedItem>
            );
          })}
        </SegmentedGroup>
        <div className='mbsc-form-group'>
          <Input label='Name' value={name} onChange={nameChange} />
          <Input label='Calories' value={calories} onChange={caloriesChange} />
          <Textarea label='Notes' value={notes} onChange={notesChange} />
        </div>
        {isEdit && (
          <div className='mbsc-button-group'>
            <Button
              className='mbsc-button-block'
              color='danger'
              variant='outline'
              onClick={onDeleteClick}
            >
              Delete meal
            </Button>
          </div>
        )}
      </Popup>
    </div>
  );
}
