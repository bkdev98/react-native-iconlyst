import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotTemperatureOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.688 6a3.75 3.75 0 0 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.786-3.287 2-4.335zm3.75-2.25A2.25 2.25 0 0 0 13.189 6v6.022a.75.75 0 0 1-.298.599c-1.033.78-1.702 2-1.702 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.669-2.598-1.702-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.214 16a2.224 2.224 0 1 1 4.447 0 2.224 2.224 0 0 1-4.447 0m2.223-.724a.724.724 0 1 0 .001 1.448.724.724 0 0 0 0-1.448"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.439 5.978a.75.75 0 0 1 .75.75v7.799a.75.75 0 0 1-1.5 0v-7.8a.75.75 0 0 1 .75-.75M5.744 5.385a.75.75 0 0 1-.002 1.06.693.693 0 0 0 .001.978 2.19 2.19 0 0 1 0 3.1.75.75 0 1 1-1.06-1.06.69.69 0 0 0 0-.979 2.193 2.193 0 0 1 0-3.1.75.75 0 0 1 1.06.001M9.246 5.385a.75.75 0 0 1-.002 1.06.692.692 0 0 0 .001.978 2.19 2.19 0 0 1 0 3.1.75.75 0 1 1-1.061-1.06.69.69 0 0 0 0-.98 2.193 2.193 0 0 1 0-3.1.75.75 0 0 1 1.062.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotTemperatureOutline;
