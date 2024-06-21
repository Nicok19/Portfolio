// src/components/SubmenuSkills.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SubmenuSkills from './SubmenuSkills';

// Mock the UiComponent, UxComponent, and FrontEndComponent
jest.mock('../User-Interface/UiComponent', () => () => <div>UI Component</div>);
jest.mock('../User-Experience/UxComponent', () => () => <div>UX Component</div>);
jest.mock('../Front-End/FeComponent', () => () => <div>Front End Component</div>);

describe('SubmenuSkills Component', () => {
  test('renders UX component by default', () => {
    render(<SubmenuSkills />);
    expect(screen.getByText('UX Component')).toBeInTheDocument();
  });

  test('renders UI component when User Interface button is clicked', () => {
    render(<SubmenuSkills />);
    
    // Click the 'User Interface' button
    fireEvent.click(screen.getByText('User Interface'));

    // Verify that the UI component is rendered
    expect(screen.getByText('UI Component')).toBeInTheDocument();
  });

  test('renders Front End component when Front End button is clicked', () => {
    render(<SubmenuSkills />);
    
    // Click the 'Front End' button
    fireEvent.click(screen.getByText('Front End'));

    // Verify that the Front End component is rendered
    expect(screen.getByText('Front End Component')).toBeInTheDocument();
  });

  test('toggles between UX, UI, and Front End components', () => {
    render(<SubmenuSkills />);
    
    // Verify that UX is rendered by default
    expect(screen.getByText('UX Component')).toBeInTheDocument();

    // Click the 'User Interface' button
    fireEvent.click(screen.getByText('User Interface'));

    // Verify that UI is rendered and UX is not
    expect(screen.getByText('UI Component')).toBeInTheDocument();
    expect(screen.queryByText('UX Component')).not.toBeInTheDocument();

    // Click the 'Front End' button
    fireEvent.click(screen.getByText('Front End'));

    // Verify that Front End is rendered and UI is not
    expect(screen.getByText('Front End Component')).toBeInTheDocument();
    expect(screen.queryByText('UI Component')).not.toBeInTheDocument();

    // Click the 'User Experience' button
    fireEvent.click(screen.getByText('User Experience'));

    // Verify that UX is rendered again and Front End is not
    expect(screen.getByText('UX Component')).toBeInTheDocument();
    expect(screen.queryByText('Front End Component')).not.toBeInTheDocument();
  });

  test('button style changes when clicked', () => {
    render(<SubmenuSkills />);
    
    const uxButton = screen.getByText('User Experience');
    const uiButton = screen.getByText('User Interface');
    const frontEndButton = screen.getByText('Front End');

    // Verify that the 'User Experience' button has the 'activeButton' class by default
    expect(uxButton).toHaveClass('activeButton');
    expect(uiButton).not.toHaveClass('activeButton');
    expect(frontEndButton).not.toHaveClass('activeButton');

    // Click the 'User Interface' button
    fireEvent.click(uiButton);

    // Verify that the 'User Interface' button has the 'activeButton' class and 'User Experience' does not
    expect(uiButton).toHaveClass('activeButton');
    expect(uxButton).not.toHaveClass('activeButton');
    expect(frontEndButton).not.toHaveClass('activeButton');

    // Click the 'Front End' button
    fireEvent.click(frontEndButton);

    // Verify that the 'Front End' button has the 'activeButton' class and others do not
    expect(frontEndButton).toHaveClass('activeButton');
    expect(uxButton).not.toHaveClass('activeButton');
    expect(uiButton).not.toHaveClass('activeButton');
  });
});
