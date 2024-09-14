import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleCloudOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.41 8.601c.562-.742 1.465-1.335 2.748-1.335s2.187.593 2.748 1.335c.36.475.582 1.013.69 1.502a3 3 0 0 1 1.487.762c.58.554.91 1.339.91 2.259a3.09 3.09 0 0 1-1.845 2.832c-.44.176-.877.242-1.225.242H9.39a3.3 3.3 0 0 1-1.249-.258 3.09 3.09 0 0 1-1.818-2.816c0-.92.33-1.705.91-2.259.415-.395.93-.648 1.488-.762.108-.49.33-1.027.69-1.502m1.196.905c-.334.442-.465.974-.465 1.278a.75.75 0 0 1-.743.75c-.476.004-.865.164-1.13.416-.257.247-.446.626-.446 1.174 0 .638.377 1.19.922 1.443.245.096.483.131.645.131h5.534c.167 0 .406-.033.652-.129.544-.253.919-.806.919-1.445 0-.548-.189-.927-.446-1.174-.265-.252-.654-.412-1.13-.416a.75.75 0 0 1-.743-.75c0-.304-.13-.836-.465-1.278-.311-.41-.791-.74-1.552-.74-.76 0-1.24.329-1.552.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleCloudOutline;
