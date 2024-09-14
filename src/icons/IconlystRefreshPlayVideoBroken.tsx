import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshPlayVideoBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.084 17.324 2.963.685.68-2.947M21.083 6.673l-2.962-.685-.681 2.946"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.054 17.759a8.34 8.34 0 0 1-1.649-9.126M6.134 6.091a8.33 8.33 0 0 1 7.395-2.335M18.115 6.238a8.34 8.34 0 0 1 1.684 9.044M18.035 17.906a8.33 8.33 0 0 1-7.395 2.335"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.724 13.013a8.9 8.9 0 0 1-2.598 1.631c-.839.33-1.542-.082-1.645-.909a16.3 16.3 0 0 1 0-3.474c.113-.86.887-1.223 1.645-.905.97.398 1.84.937 2.598 1.63.647.586.662 1.42 0 2.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshPlayVideoBroken;
