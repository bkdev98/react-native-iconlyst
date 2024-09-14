import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 13.495a2.74 2.74 0 0 1-2.737-2.736 2.74 2.74 0 0 1 2.737-2.737 2.74 2.74 0 0 1 2.736 2.737 2.74 2.74 0 0 1-2.736 2.736m5.614-8.843c-1.531-1.579-3.525-2.449-5.614-2.449-2.091 0-4.085.87-5.617 2.45-1.555 1.604-2.409 3.759-2.342 5.913.189 6.104 7.379 10.857 7.686 11.056l.269.175.272-.172c.306-.194 7.501-4.832 7.691-11.06.066-2.153-.789-4.309-2.345-5.913"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLocationBoldsharp;
