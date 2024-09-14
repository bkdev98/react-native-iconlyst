import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirtableLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.662 10.227A.5.5 0 0 0 3 10.7v6.541a.5.5 0 0 0 .697.46l6-2.572a.5.5 0 0 0 .303-.46v-1.912a.5.5 0 0 0-.338-.473zM4.423 5.526a.5.5 0 0 0 0 .949l7.419 2.473a.5.5 0 0 0 .316 0l7.419-2.473a.5.5 0 0 0 0-.949l-7.419-2.473a.5.5 0 0 0-.316 0zM14.344 12.188a.5.5 0 0 0-.344.475v7.58a.5.5 0 0 0 .697.46l6-2.572a.5.5 0 0 0 .303-.46v-6.98a.5.5 0 0 0-.656-.474z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirtableLight;
