import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCheckBulk = ({
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
      d="M19.945 20.075c-.88 1.01-2.28 1.55-4.04 1.55h-7.82c-1.94 0-3.29-.47-4.12-1.43-.85-.98-1.11-2.41-.82-4.36l.73-5.64c.43-2.43 2.05-3.3 3.32-3.32h9.58c1.28 0 2.84.86 3.37 3.27l.74 5.7c.25 1.79-.06 3.22-.94 4.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.79 6.875h-1.51c-.14-1.68-1.56-3-3.28-3h-.01c-1.73 0-3.14 1.32-3.28 3h-1.5c.15-2.52 2.24-4.5 4.77-4.5a4.787 4.787 0 0 1 4.81 4.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m11.514 16.633 4.071-4.073a.75.75 0 1 0-1.06-1.061l-3.542 3.543-1.507-1.506a.751.751 0 0 0-1.06 1.062l2.037 2.036a.75.75 0 0 0 1.061-.001"
    />
  </Svg>
);
export default IconlystShoppingBagCheckBulk;