import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemove2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.614 20.311.43-2.67h2.88l.43 2.67zm10.12-10.29a5.973 5.973 0 0 1-5.944-6.528c.02-.188-.122-.362-.312-.362H6.514c-2.5 0-4.53 2.03-4.53 4.53v5.45c0 2.5 2.03 4.53 4.53 4.53h2.01l-.43 2.67h-1.56c-.41 0-.75.34-.75.75s.34.75.75.75h9.89a.749.749 0 1 0 0-1.5h-1.55l-.43-2.67h2.01c2.5 0 4.53-2.03 4.53-4.53v-2.854c0-.189-.173-.33-.36-.303q-.435.066-.89.067"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.266 7.544a.74.74 0 0 1-.53-.22l-1.398-1.397-1.397 1.397a.749.749 0 1 1-1.06-1.06l1.397-1.397L16.88 3.47a.749.749 0 1 1 1.06-1.06l1.397 1.397 1.398-1.397a.749.749 0 1 1 1.06 1.06l-1.397 1.398 1.397 1.397a.749.749 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemove2Bold;
