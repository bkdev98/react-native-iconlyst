import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward30s2Bulk = ({
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
      d="M18.766 9.427a.749.749 0 0 0-.592 1.206l1.49 1.943c.02.027.052.04.075.061.014.016.032.026.048.04.06.05.117.097.188.127.051.023.108.028.164.038.041.007.078.028.12.028l.01-.002.01.002a.74.74 0 0 0 .602-.328l1.471-1.92a.75.75 0 0 0-.596-1.207h-.003l-.725.003V8.39c0-3.183-2.049-5.32-5.099-5.32H8.26c-3.05 0-5.098 2.137-5.098 5.32v7.221c0 3.181 2.05 5.32 5.1 5.32h7.667c3.05 0 5.1-2.139 5.1-5.32a.75.75 0 0 0-1.5 0c0 2.32-1.413 3.82-3.6 3.82H8.261c-2.186 0-3.599-1.5-3.599-3.82v-7.22c0-2.32 1.412-3.82 3.598-3.82h7.67c2.186 0 3.598 1.5 3.598 3.82v1.033z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.928 14.008a.6.6 0 0 1-.598-.6.75.75 0 0 0-1.5 0c0 1.158.942 2.1 2.098 2.1a2.1 2.1 0 0 0 2.1-2.1 2.1 2.1 0 0 0-.494-1.35A2.1 2.1 0 0 0 8.93 8.61a2.1 2.1 0 0 0-2.099 2.1.75.75 0 0 0 1.5 0 .598.598 0 1 1 .599.6.75.75 0 0 0 0 1.5.6.6 0 0 1 0 1.2M14.676 13.138c0 .458-.368.83-.82.83a.827.827 0 0 1-.823-.83v-2.16a.822.822 0 0 1 1.643 0zm-.82-4.48a2.323 2.323 0 0 0-2.323 2.32v2.16a2.33 2.33 0 0 0 2.322 2.33 2.33 2.33 0 0 0 2.321-2.33v-2.16a2.323 2.323 0 0 0-2.32-2.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward30s2Bulk;
