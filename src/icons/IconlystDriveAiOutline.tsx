import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDriveAiOutline = ({
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
      d="M10.435 8.438a1.25 1.25 0 0 0-.93.416L8.6 9.862a.75.75 0 0 1-.559.25H3.518a.75.75 0 1 1 0-1.5h4.188l.682-.76.553.496-.553-.496a2.75 2.75 0 0 1 2.047-.914h3.131a2.75 2.75 0 0 1 2.048.914l.68.76h4.189a.75.75 0 0 1 0 1.5H15.96a.75.75 0 0 1-.558-.25l-.905-1.008a1.25 1.25 0 0 0-.93-.416z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5.75.75 0 0 1 0 1.5c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 12 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.844 15.935c.918 1.014 1.398 2.587 1.398 4.824a.75.75 0 0 0 1.5 0c0-2.413-.513-4.423-1.785-5.83-1.286-1.422-3.218-2.086-5.735-2.086a.75.75 0 0 0 0 1.5c2.266 0 3.719.594 4.622 1.592M17.754 13.748a.75.75 0 0 1 .703.49l.127.342a3.96 3.96 0 0 0 2.335 2.34l.341.126a.75.75 0 0 1 0 1.406l-.34.127a3.96 3.96 0 0 0-2.337 2.339l-.126.342a.75.75 0 0 1-1.407 0l-.126-.342a3.96 3.96 0 0 0-2.336-2.34l-.341-.126a.75.75 0 0 1 0-1.406l.341-.127a3.96 3.96 0 0 0 2.336-2.34l.126-.341a.75.75 0 0 1 .704-.49m-1.514 4c.6.4 1.114.916 1.514 1.516.4-.6.914-1.115 1.513-1.515-.6-.4-1.114-.915-1.513-1.515-.4.6-.914 1.115-1.514 1.515M12.25 10.853a.75.75 0 0 1 .717.532 1.95 1.95 0 0 0 1.295 1.297.75.75 0 0 1 0 1.435 1.95 1.95 0 0 0-1.295 1.296.75.75 0 0 1-1.435 0 1.95 1.95 0 0 0-1.294-1.296.75.75 0 0 1 0-1.435 1.95 1.95 0 0 0 1.294-1.297.75.75 0 0 1 .718-.532m-.294 2.546q.155.138.294.295.138-.156.294-.295a4 4 0 0 1-.294-.294q-.138.156-.294.294"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDriveAiOutline;
