/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      capacity
      availability {
        datetime_start
        datetime_end
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      capacity
      availability {
        datetime_start
        datetime_end
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      capacity
      availability {
        datetime_start
        datetime_end
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      description
      event_owner
      room_id
      image_file_name
      event_datetime_start
      event_datetime_end
      event_duration
      total_tickets
      tickets {
        student_id
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      event_owner
      room_id
      image_file_name
      event_datetime_start
      event_datetime_end
      event_duration
      total_tickets
      tickets {
        student_id
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      event_owner
      room_id
      image_file_name
      event_datetime_start
      event_datetime_end
      event_duration
      total_tickets
      tickets {
        student_id
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
