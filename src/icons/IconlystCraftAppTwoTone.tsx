import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCraftAppTwoTone = ({
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
      d="M20.052 3.023c.556 0 1.013.453.94 1.004a7.68 7.68 0 0 1-4.668 6.082c-.62.257-1.27.43-1.932.518-.55.073-1.003-.384-1.003-.94V4.03c0-.556.45-1.007 1.006-1.007z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.948 10.69c-.556 0-1.013-.453-.94-1.004a7.67 7.67 0 0 1 6.6-6.6c.551-.073 1.003.384 1.003.94v5.657c0 .556-.45 1.007-1.006 1.007zM20.052 20.979c.556 0 1.013-.453.94-1.004a7.67 7.67 0 0 0-4.668-6.082 7.7 7.7 0 0 0-1.932-.518c-.55-.073-1.003.384-1.003.94v5.657c0 .556.45 1.007 1.006 1.007z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.948 13.309c-.556 0-1.013.452-.94 1.003a7.67 7.67 0 0 0 6.6 6.6c.551.073 1.003-.384 1.003-.94v-5.657c0-.556-.45-1.006-1.006-1.006z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCraftAppTwoTone;
