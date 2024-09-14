import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 16.515v-2.628M21.38 11.476l-.03.02c-2.42 1.493-5.62 2.394-9.1 2.394-2.3 0-4.472-.392-6.378-1.086"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.552c-6.91 0-9.21-2.051-9.21-8.203s2.3-8.203 9.21-8.203 9.21 2.05 9.21 8.203c0 4.836-1.421 7.138-5.385 7.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.51 5.367v-.63c0-1.264-.92-2.289-2.06-2.289h-2.4c-1.14 0-2.06 1.025-2.06 2.29v.63"
    />
  </Svg>
);
export default IconlystWorkBrokencurved;
