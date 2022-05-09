const EventList = ({ Event, deleteEvent }) => {
  return (
    <ul>
      {Event && Event.length > 0 ? (
        Event.map((event) => {
          return (
            <li key={event._id} onClick={() => deleteEvent(event._id)}>
              {event.name}
            </li>
          );
        })
      ) : (
        <li>Currently there are no Events available </li>
      )}
    </ul>
  );
};

export default EventList;
