import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.841 10.253a.75.75 0 0 1 0 1.5h-2.796a2.8 2.8 0 0 0 0 .63h2.796a.75.75 0 0 1 0 1.5h-2.145a3.01 3.01 0 0 0 2.416 1.06c.38-.035.764.303.782.716a.75.75 0 0 1-.717.781 4.504 4.504 0 0 1-4.122-2.287c-.05-.088-.088-.18-.131-.27h-.318a.75.75 0 0 1-.75-.75c0-.387.296-.694.672-.734a4 4 0 0 1 0-.662.743.743 0 0 1 .078-1.485h.313c.044-.093.083-.187.134-.277.847-1.476 2.432-2.303 4.118-2.292a.75.75 0 0 1 .724.776.756.756 0 0 1-.777.723c-.938-.056-1.828.364-2.428 1.07zM12 2.562c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEuroCircleBold;
