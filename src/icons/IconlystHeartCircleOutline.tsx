import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartCircleOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.205 8.162a3.2 3.2 0 0 1 1.51.106l.004.001c1.955.631 2.532 2.726 2.003 4.377l-.001.004c-.437 1.334-1.529 2.356-2.412 3.012a11.6 11.6 0 0 1-1.687 1.037l-.031.015-.01.005-.002.001h-.002l-.317-.679-.318.68-.001-.001-.003-.002-.01-.004-.031-.015-.11-.056a11.782 11.782 0 0 1-1.592-.99c-.887-.657-1.986-1.681-2.402-3.01-.528-1.654.057-3.739 2.007-4.373l.009-.003a3.25 3.25 0 0 1 1.506-.101c.354.06.679.222.943.388.265-.168.59-.331.945-.392zm-.945 7.88-.318.678c.201.094.434.094.636 0zm0-.845.115-.063c.274-.156.647-.384 1.04-.675.808-.601 1.59-1.39 1.88-2.273.355-1.112-.097-2.185-1.035-2.488a1.7 1.7 0 0 0-.805-.057c-.179.03-.401.172-.745.43a.75.75 0 0 1-.895.003c-.35-.259-.57-.4-.749-.43a1.75 1.75 0 0 0-.806.054c-.942.309-1.392 1.382-1.037 2.49l.001.005c.27.862 1.045 1.648 1.864 2.255a10 10 0 0 0 1.172.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartCircleOutline;
