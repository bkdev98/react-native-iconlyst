import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartTickBroken = ({
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
      d="m9.3 10.894 1.766 1.767L14.7 9.023"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.645 11.915c1.021-3.186-.166-6.841-3.503-7.916a5.7 5.7 0 0 0-2.674-.189c-.893.152-1.738.768-2.464 1.313-.73-.54-1.574-1.153-2.466-1.304a5.74 5.74 0 0 0-2.672.18c-3.337 1.085-4.534 4.73-3.512 7.916 1.576 5.053 8.65 8.356 8.65 8.356s4.133-1.925 6.797-5.145"
    />
  </Svg>
);
export default IconlystHeartTickBroken;
