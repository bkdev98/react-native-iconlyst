import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlumsLight = ({
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
      d="M19.207 18.102c-1.467 2.465-4.51 3.63-6.684 2.41-2.174-1.218-2.655-4.358-1.188-6.823 1.467-2.464 4.205-3.116 6.379-1.898s2.96 3.846 1.493 6.31"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.886 17.477c1.311-1.763 3.34-6.192.967-9.808M17.259 11.432c.364-.895.02-3.867 3.67-3.045-.24.766.137 2.977-3.67 3.045M10.775 5.693c1.146 2.071.707 4.58-1.07 5.444s-4.22-.245-5.365-2.317-.468-4.15 1.31-5.014c1.776-.863 3.98-.185 5.125 1.887"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.577 7.867C7.39 6.387 5.549 3.358 3.072 3"
    />
  </Svg>
);
export default IconlystPlumsLight;
