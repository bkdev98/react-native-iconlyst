import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoreTwoTone = ({
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
      d="M6.286 3.84h12.428c.784 0 1.487.493 1.766 1.24l.894 2.601c.472 1.262-.442 2.613-1.766 2.613H5.392c-1.324 0-2.239-1.35-1.766-2.613L4.52 5.08c.28-.746.983-1.24 1.767-1.24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.034 10.295 9.94 3.84M16.062 10.295l-.906-6.455"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.29 10.304v7.247a2.623 2.623 0 0 0 2.636 2.61h9.147a2.623 2.623 0 0 0 2.637-2.608v-7.256"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.037 20.159v-3.482a2.462 2.462 0 1 1 4.926 0v3.482"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStoreTwoTone;
