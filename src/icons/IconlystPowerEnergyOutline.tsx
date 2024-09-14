import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerEnergyOutline = ({
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
      d="M12.007 2.398a.75.75 0 0 1 .75.75v.032a.75.75 0 0 1-1.5 0v-.032a.75.75 0 0 1 .75-.75m6.9 2.832a.75.75 0 0 1 0 1.06l-.045.046a.75.75 0 1 1-1.06-1.06l.045-.046a.75.75 0 0 1 1.06 0m-13.775.026a.75.75 0 0 1 1.061 0l.02.02a.75.75 0 0 1-1.061 1.06l-.02-.02a.75.75 0 0 1 0-1.06M2.25 12.143a.75.75 0 0 1 .75-.75h.05a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m17.957 0a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-.043a.75.75 0 0 1-.75-.75M6.212 17.938a.75.75 0 0 1 0 1.06l-.019.02a.75.75 0 0 1-1.06-1.06l.019-.02a.75.75 0 0 1 1.06 0m11.59 0a.75.75 0 0 1 1.06 0l.046.046a.75.75 0 1 1-1.061 1.06L17.801 19a.75.75 0 0 1 0-1.06m-5.795 2.406a.75.75 0 0 1 .75.75v.032a.75.75 0 0 1-1.5 0v-.032a.75.75 0 0 1 .75-.75M12 6.887a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m-6.75 5.25a6.75 6.75 0 1 1 13.5.001 6.75 6.75 0 0 1-13.5-.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.416 8.507a.75.75 0 0 1 .223 1.037l-1.19 1.843h2.48a.75.75 0 0 1 .63 1.158l-1.941 3a.75.75 0 0 1-1.26-.816l1.192-1.841h-2.479a.75.75 0 0 1-.63-1.157L11.38 8.73a.75.75 0 0 1 1.037-.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerEnergyOutline;
