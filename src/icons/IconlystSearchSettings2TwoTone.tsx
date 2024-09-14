import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettings2TwoTone = ({
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
      d="m20.006 18.225 1.495 1.492m-3.516-6.637a2.97 2.97 0 1 1 .001 5.938 2.97 2.97 0 0 1 0-5.938"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.808 8.412-1.827-3.166a2.78 2.78 0 0 0-2.411-1.391H9.38c-.995 0-1.915.53-2.412 1.391l-3.095 5.362a2.79 2.79 0 0 0 0 2.785l3.095 5.361a2.78 2.78 0 0 0 2.411 1.391h2.972"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.611 14.028a2.72 2.72 0 0 1-.894-2.029 2.76 2.76 0 0 1 2.756-2.756c.803 0 1.531.341 2.03.894"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchSettings2TwoTone;
