import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoveBroken = ({
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
      d="M18.886 17.632s-2.453-1.336-3.026-3.117c-.355-1.112.06-2.38 1.226-2.756a1.99 1.99 0 0 1 1.8.303 2 2 0 0 1 1.798-.303c1.165.375 1.584 1.644 1.229 2.756-.19.605-.607 1.162-1.072 1.633"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.736 19.877H6.324c-1.408 0-2.258-.913-2.318-2.185 0-2.59 2.802-3.482 7.024-3.512q.705.006 1.354.046M7.486 7.675a3.55 3.55 0 1 0 1.152-2.617"
    />
  </Svg>
);
export default IconlystUserLoveBroken;
