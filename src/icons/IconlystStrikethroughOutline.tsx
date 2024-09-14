import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrikethroughOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.24 4.663c.986-1.057 2.388-1.647 4.043-1.647h8.435c1.66 0 3.061.59 4.045 1.647.979 1.05 1.487 2.501 1.487 4.129v7.947c0 1.628-.508 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.046 1.648H8.283c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.792c0-1.629.511-3.08 1.49-4.13m1.098 1.023C4.66 6.412 4.25 7.475 4.25 8.792v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.792c0-1.318-.409-2.381-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.283c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.3 12.506a.75.75 0 0 1 .962-.444c.59.217 1.258.504 1.778.983.556.512.906 1.21.906 2.143 0 1.825-1.618 3.171-3.444 3.171s-3.444-1.346-3.444-3.171a.75.75 0 1 1 1.5 0c0 .85.793 1.671 1.944 1.671s1.944-.821 1.944-1.671c0-.507-.17-.807-.422-1.04-.289-.266-.716-.47-1.28-.678a.75.75 0 0 1-.445-.964"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.518 12.766a.75.75 0 0 1 .75-.75h8.467a.75.75 0 0 1 0 1.5H8.268a.75.75 0 0 1-.75-.75M12.5 8.672c-1.093 0-1.795.768-1.795 1.672v.004q0 .151.036.295a.75.75 0 1 1-1.453.37 2.7 2.7 0 0 1-.083-.672v-.002l.75.005h-.75v-.003c.001-1.768 1.412-3.17 3.295-3.17 1.44 0 2.616.82 3.082 2.025a.75.75 0 1 1-1.398.542c-.234-.602-.835-1.066-1.684-1.066"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStrikethroughOutline;
