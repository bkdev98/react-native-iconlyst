import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAreaChartOutline = ({
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
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.817 6.699a.75.75 0 0 1 .073 1.058l-4.516 5.188a.75.75 0 0 1-1.01.112L9.53 9.5l-4.196 4.01a.75.75 0 0 1-1.037-1.085L8.948 7.98a.75.75 0 0 1 .963-.062l4.786 3.521 4.062-4.667a.75.75 0 0 1 1.058-.073M19.99 13.562a.75.75 0 0 1-.317 1.013l-4.551 2.385a.75.75 0 0 1-.576.05l-5.008-1.595-4.373 2.307a.75.75 0 1 1-.7-1.327l4.651-2.454a.75.75 0 0 1 .578-.05l5.009 1.595 4.274-2.24a.75.75 0 0 1 1.012.316"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.99 3.771a.75.75 0 0 1-.317 1.013l-4.551 2.385a.75.75 0 0 1-.576.05L9.538 5.624 5.165 7.93a.75.75 0 0 1-.7-1.327L9.116 4.15a.75.75 0 0 1 .578-.05l5.009 1.595 4.274-2.24a.75.75 0 0 1 1.012.316"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAreaChartOutline;
