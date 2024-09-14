import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRaspberriesTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.835 6.892c-.17-1.032-.665-2.505 1.07-3.892M12.324 6.8C10.926 4.895 8.746 5.715 7.818 3.99c-.746.815-1.375 3.094.907 4.023" />
      <Path d="M16.16 8.318c.65-.43 1.849-2.136 1.459-3.684-2.052 1.4-4.07.937-4.974 2.282M12.312 11.843a.87.87 0 0 0-1.23 0 .87.87 0 0 1-1.23 0 .87.87 0 0 0-1.23 0M15.93 13.975a.87.87 0 0 0-1.23 0 .87.87 0 0 1-1.23 0M12.835 16.49a.87.87 0 0 1-1.23 0 .87.87 0 0 0-1.23 0" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.506 9.836a3.21 3.21 0 0 1 3.27-1.608c.749-.79 2.064-1.37 3.273-1.335 1.208-.034 2.426.545 3.175 1.335a3.21 3.21 0 0 1 3.27 1.608c.544.96.558 2.083.136 3.019l.044.076c.98 1.728-.062 3.882-1.796 4.329-.113 1.553-1.405 2.691-2.804 2.728-1.052 1.325-2.976 1.374-4.148 0-1.4-.037-2.69-1.175-2.805-2.728-1.733-.447-2.774-2.6-1.795-4.329l.044-.076a3.34 3.34 0 0 1 .136-3.019"
    />
  </Svg>
);
export default IconlystRaspberriesTwoTone;
