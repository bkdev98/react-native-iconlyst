import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMiroCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.777 7.653a.75.75 0 0 1 1.06.057l2.205 2.458a.75.75 0 0 1 .149.752l-1.824 5.119a.75.75 0 0 1-1.413-.504l1.674-4.698-1.908-2.125a.75.75 0 0 1 .057-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.135 7.616a.75.75 0 0 1 1.052.138l2.525 3.29a.75.75 0 0 1 .075.795l-2.165 4.286a.75.75 0 0 1-1.339-.676l1.952-3.865-2.238-2.916a.75.75 0 0 1 .138-1.052M14.638 7.68a.75.75 0 0 1 1.06 0l1.684 1.684a.75.75 0 0 1 .197.712l-1.473 5.893a.75.75 0 1 1-1.455-.364l1.37-5.48-1.383-1.384a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMiroCircleOutline;
