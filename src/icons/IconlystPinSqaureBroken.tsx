import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinSqaureBroken = ({
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
      d="M8.532 21c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.75 5.081 5.593 3 8.532 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-4.907"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.288 10.122c.342.343.406.901.098 1.274a.91.91 0 0 1-.746.332c-.296-.013-.587.068-.795.279l-.956.972a1.6 1.6 0 0 0-.451.95l-.088.783a1.013 1.013 0 0 1-1.723.604l-2.952-2.952c-.6-.6-.24-1.63.604-1.724l.782-.087c.358-.04.693-.2.95-.451l.973-.957c.21-.207.29-.499.278-.794a.91.91 0 0 1 .332-.746c.374-.308.932-.244 1.275.098M11.115 13.875l-1.693 1.693"
    />
  </Svg>
);
export default IconlystPinSqaureBroken;
