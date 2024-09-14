import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemtn2LineAiOutline = ({
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
      d="M15.75 8a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75M13.41 12a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h3.66a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.452 3.75a3.37 3.37 0 0 0-3.37 3.37v9.76a3.37 3.37 0 0 0 3.37 3.37h4.183a.75.75 0 0 1 0 1.5H8.452a4.87 4.87 0 0 1-4.87-4.87V7.12a4.87 4.87 0 0 1 4.87-4.87h7.096a4.87 4.87 0 0 1 4.87 4.87v5.904a.75.75 0 0 1-1.5 0V7.12a3.37 3.37 0 0 0-3.37-3.37z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.204 21.336a.75.75 0 0 0 .704-.49l.102-.278a3.07 3.07 0 0 1 1.814-1.817l.277-.102a.75.75 0 0 0 0-1.407l-.277-.102a3.07 3.07 0 0 1-1.814-1.817l-.102-.278a.75.75 0 0 0-1.407 0l-.103.278a3.07 3.07 0 0 1-1.813 1.816l-.278.103a.75.75 0 0 0 0 1.407l.278.102c.84.312 1.502.975 1.813 1.817l.103.277a.75.75 0 0 0 .703.49m-.983-3.39c.376-.277.708-.608.983-.985.276.377.608.709.984.985a4.6 4.6 0 0 0-.984.984 4.6 4.6 0 0 0-.983-.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocuemtn2LineAiOutline;
