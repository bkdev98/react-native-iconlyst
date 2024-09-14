import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserAiOutline = ({
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
      d="M12.695 2.955c.823-.029 1.612.3 2.252.94l2.918 2.918c.64.64.97 1.43.941 2.254-.03.814-.407 1.58-1.026 2.199l-7.216 7.217c-.619.62-1.385.997-2.2 1.026-.823.029-1.613-.301-2.254-.942L3.193 15.65c-.641-.64-.97-1.43-.941-2.254.03-.815.407-1.58 1.026-2.199l7.216-7.217c.62-.62 1.386-.996 2.201-1.025m-1.14 2.085-7.217 7.218c-.4.4-.574.82-.587 1.192-.013.364.124.76.502 1.14l2.918 2.916c.378.379.776.517 1.14.504.372-.014.793-.188 1.192-.587l7.217-7.218c.4-.4.574-.82.587-1.192.013-.363-.124-.76-.503-1.14l-2.917-2.917c-.378-.377-.775-.514-1.14-.502-.372.013-.793.187-1.192.586"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.737 7.73a.75.75 0 0 1 1.061 0l6.23 6.23a.75.75 0 1 1-1.062 1.06L6.737 8.79a.75.75 0 0 1 0-1.06M18.317 14.174a.75.75 0 0 1 .704.49l.104.282c.318.86.995 1.538 1.854 1.856l.282.105a.75.75 0 0 1 0 1.406l-.282.105a3.14 3.14 0 0 0-1.854 1.856l-.104.282a.75.75 0 0 1-1.407 0l-.105-.282a3.14 3.14 0 0 0-1.853-1.856l-.282-.105a.75.75 0 0 1 0-1.406l.282-.105a3.14 3.14 0 0 0 1.853-1.856l.105-.282a.75.75 0 0 1 .703-.49m-1.023 3.436c.393.286.738.631 1.023 1.024a4.6 4.6 0 0 1 1.023-1.024 4.6 4.6 0 0 1-1.023-1.024 4.6 4.6 0 0 1-1.023 1.024M12.747 20.297a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEraserAiOutline;
