import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink2Bulk = ({
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
      d="M6.64 2.5c-.34 0-.713.066-1.016.273-.329.226-.52.583-.52 1.027v1.574H9.16q.053 0 .104.01V3.8c0-.444-.192-.801-.521-1.027-.303-.207-.675-.273-1.016-.273zM5.104 6.972v-.498H9.16q.053 0 .104-.01v.508c0 .92.288 1.54.894 2.333l.317.414a5.37 5.37 0 0 1 1.098 3.254v.495a.6.6 0 0 0-.104-.01H7.331a.55.55 0 1 0 0 1.1h4.138q.054 0 .104-.01v2.365a.6.6 0 0 0-.103-.01H7.332a.55.55 0 1 0 0 1.1h4.138q.053 0 .103-.01v1.4A2.106 2.106 0 0 1 9.467 21.5H4.9a2.107 2.107 0 0 1-2.106-2.107v-6.42a5.36 5.36 0 0 1 1.1-3.254l.316-.414c.605-.794.894-1.413.894-2.333"
    />
    <Path
      fill={props.color}
      d="m13.288 12.825.619 7.549a1.227 1.227 0 0 0 1.222 1.126h3.733c.637 0 1.17-.49 1.221-1.126l.619-7.549A1.225 1.225 0 0 0 19.48 11.5h-4.97c-.717 0-1.281.611-1.222 1.325"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDrink2Bulk;
