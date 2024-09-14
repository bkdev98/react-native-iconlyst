import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunglassesBold = ({
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
      d="M14.194 8.998a.3.3 0 0 0-.292.347l.233 1.463a.3.3 0 0 0 .3.253l1.675-.022a.3.3 0 0 0 .294-.263l.183-1.47a.3.3 0 0 0-.302-.337zM7.681 8.998a.3.3 0 0 0-.292.347l.233 1.463a.3.3 0 0 0 .3.253l1.675-.022a.3.3 0 0 0 .294-.263l.182-1.47a.3.3 0 0 0-.302-.337z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.875 8.876c-.014.181-.151.343-.333.343H3.165a.3.3 0 0 1-.299-.3v-.73c0-3.183 2.045-5.322 5.088-5.322h8.091c3.043 0 5.088 2.14 5.088 5.322v.73a.3.3 0 0 1-.299.3h-2.381c-.181 0-.318-.16-.332-.341a1.5 1.5 0 0 0-.359-.879 1.47 1.47 0 0 0-1.099-.497h-2.816c-.426 0-.83.184-1.108.505a1.5 1.5 0 0 0-.352.869c-.013.181-.15.343-.333.343h-.114c-.182 0-.32-.16-.332-.341a1.5 1.5 0 0 0-.359-.88 1.47 1.47 0 0 0-1.1-.496H7.334c-.425 0-.83.184-1.108.505a1.5 1.5 0 0 0-.351.869"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.893 10.951-.036.297a1.47 1.47 0 0 1-1.455 1.287h-2.26a1.47 1.47 0 0 1-1.452-1.262l-.044-.326a.3.3 0 0 0-.298-.26h-.67a.3.3 0 0 0-.298.264l-.036.297a1.47 1.47 0 0 1-1.455 1.287H7.63a1.47 1.47 0 0 1-1.452-1.262l-.044-.326a.3.3 0 0 0-.298-.26H3.166a.3.3 0 0 0-.3.3v4.825c0 3.184 2.045 5.322 5.088 5.322h8.09c3.044 0 5.09-2.138 5.09-5.322v-4.825a.3.3 0 0 0-.3-.3H18.19a.3.3 0 0 0-.298.264M12 17.264c.997 0 1.942-.35 2.732-1.017a.75.75 0 0 0-.967-1.147c-1.204 1.016-3.01.793-4.009-.502a.749.749 0 1 0-1.189.915c.857 1.113 2.108 1.751 3.433 1.751"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunglassesBold;
