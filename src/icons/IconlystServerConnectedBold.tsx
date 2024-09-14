import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectedBold = ({
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
      d="M13.425 18.684h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m-6.37-.22a.75.75 0 1 1-1.06-1.06c.28-.28.78-.28 1.06 0a.75.75 0 0 1 0 1.06m6.37-5.654h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m-6.37-.22a.75.75 0 1 1-1.06-1.06c.28-.28.78-.28 1.06 0a.75.75 0 0 1 0 1.06m6.37-5.673h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m-6.37-.22a.75.75 0 1 1-1.06-1.06c.28-.28.78-.28 1.06 0a.75.75 0 0 1 0 1.06m14.52 1.37c0-1.46-1.19-2.65-2.65-2.65h-.59c-.35-1.46-1.65-2.55-3.21-2.55h-9.4c-1.88 0-3.3 1.42-3.3 3.3 0 1.007.447 1.904 1.162 2.514a.03.03 0 0 0 .018.006c.61-.4 1.34-.62 2.12-.62h9.4c.7 0 1.352.186 1.912.513a.3.3 0 0 0 .355-.029c.455-.428.791-.999.943-1.634h.59c.55 0 1.15.44 1.15 1.15v2.093c0 .55-.44 1.15-1.15 1.15h-.59c-.35-1.46-1.65-2.55-3.21-2.55h-9.4c-1.88 0-3.3 1.42-3.3 3.3 0 1.82 1.48 3.3 3.3 3.3h9.4c1.56 0 2.86-1.09 3.21-2.55h.59c.55 0 1.15.44 1.15 1.15v2.074c0 .55-.44 1.15-1.15 1.15h-.57a3.3 3.3 0 0 0-.89-1.668.3.3 0 0 0-.368-.033 3.77 3.77 0 0 1-1.972.551h-9.4a3.77 3.77 0 0 1-1.974-.553.3.3 0 0 0-.366.032 3.28 3.28 0 0 0-.96 2.321c0 1.82 1.48 3.3 3.3 3.3h9.4c1.49 0 2.78-1.06 3.17-2.45h.63c1.46 0 2.65-1.19 2.65-2.65V13.96c0-.75-.31-1.42-.81-1.9.5-.48.81-1.15.81-1.9z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerConnectedBold;