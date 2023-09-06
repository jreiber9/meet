// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event'

const mockEvent = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    });

    test('renders event location', () => {
        const location = EventComponent.queryByText(mockEvent.location);
        expect(location).toBeInTheDocument();
    });

    test('has the event title', () => {
        const title = EventComponent.queryByText(mockEvent.summary);
        expect(title).toBeInTheDocument();
    });

    test('renders the events time', () => {
        const time = EventComponent.queryByText(mockEvent.created);
        expect(time).toBeInTheDocument();
    });

    test('renders button "show details"', () => {
        const button = EventComponent.queryByText('Show Details');
        expect(button).toBeInTheDocument();
    });

    test('event details hidden by default', () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('show details after "show details" button is clicked', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);

        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hide event details when "hide details" button is clicked', async () => {
        const button = EventComponent.queryByText('Show Details');
        const eventDOM = EventComponent.container.firstChild;
        await userEvent.click(button);

        const hideButton = EventComponent.queryByText('Hide Details');
        await userEvent.click(hideButton);

        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});