// src/components/SubMenu.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SubMenu from './SubMenu'; // Import the SubMenu component

// Mock components used in SubMenu
jest.mock('../BehanceAndGithub/Behance', () => () => <div>Mocked Behance Component</div>);
jest.mock('../BehanceAndGithub/Github', () => () => <div>Mocked Github Component</div>);

describe('SubMenu Component', () => {
  // Test to verify default rendering of Behance component
  test('renders Behance component by default', () => {
    render(<SubMenu />);
    expect(screen.getByText('Mocked Behance Component')).toBeInTheDocument();
  });

  // Test to verify rendering of Github component when Front End button is clicked
  test('renders Github component when Front End button is clicked', () => {
    render(<SubMenu />);
    
    // Click the 'Front End' button
    fireEvent.click(screen.getByText('Front End'));

    // Verify that the Github component is rendered
    expect(screen.getByText('Mocked Github Component')).toBeInTheDocument();
  });

  // Test to verify toggling between Behance and Github components
  test('toggles between Behance and Github components', () => {
    render(<SubMenu />);
    
    // Verify that Behance is rendered by default
    expect(screen.getByText('Mocked Behance Component')).toBeInTheDocument();

    // Click the 'Front End' button
    fireEvent.click(screen.getByText('Front End'));

    // Verify that Github is rendered and Behance is not
    expect(screen.getByText('Mocked Github Component')).toBeInTheDocument();
    expect(screen.queryByText('Mocked Behance Component')).not.toBeInTheDocument();

    // Click the 'UX/UI' button
    fireEvent.click(screen.getByText('UX/UI'));

    // Verify that Behance is rendered again and Github is not
    expect(screen.getByText('Mocked Behance Component')).toBeInTheDocument();
    expect(screen.queryByText('Mocked Github Component')).not.toBeInTheDocument();
  });

  // Test to verify button style changes when clicked
  test('button style changes when clicked', () => {
    render(<SubMenu />);
    
    const uxuiButton = screen.getByText('UX/UI');
    const frontEndButton = screen.getByText('Front End');

    // Verify that the 'UX/UI' button has the 'activeButton' class by default
    expect(uxuiButton).toHaveClass('activeButton');
    expect(frontEndButton).not.toHaveClass('activeButton');

    // Click the 'Front End' button
    fireEvent.click(frontEndButton);

    // Verify that the 'Front End' button has the 'activeButton' class and 'UX/UI' does not
    expect(frontEndButton).toHaveClass('activeButton');
    expect(uxuiButton).not.toHaveClass('activeButton');
  });
});
