

import {render, fireEvent} from '@testing-library/react'
import {describe, expect, test} from '@jest/globals';
import ButtonComponent from '../Button';

describe("Button Component", () => {
    describe("increment count", () => {
      it("click button", async () => {
        const { getByTestId, getByText } = render(<ButtonComponent count={42}/>);
        const incrementButton = getByText("Click");
        fireEvent.click(incrementButton);
        expect(getByTestId("counter-value").innerHTML).toEqual("43");
      });
    });
  });