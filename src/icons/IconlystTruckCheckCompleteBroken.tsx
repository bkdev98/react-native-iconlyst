import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckCheckCompleteBroken = ({
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
      d="m7.46 10.637 1.483 1.481 2.794-2.795M16.197 15.266a1.917 1.917 0 1 1 0 3.833 1.917 1.917 0 0 1 0-3.833M7.053 15.266a1.917 1.917 0 1 1 0 3.833 1.917 1.917 0 0 1 0-3.833M16.197 15.266V6.98a2.08 2.08 0 0 0-2.08-2.08H9.584"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.08 17.183A2.08 2.08 0 0 1 3 15.104V6.95C3 5.817 3.917 4.9 5.048 4.9h1.268M18.113 17.182h.808A2.08 2.08 0 0 0 21 15.104V11.66c0-.936-.553-1.784-1.41-2.162l-1.324-.584M18.598 12.41h2.4M8.969 17.183h3.312"
    />
  </Svg>
);
export default IconlystTruckCheckCompleteBroken;
