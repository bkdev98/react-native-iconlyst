import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlackBold = ({
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
      d="M16.167 10.934c.192-.326.264-.68.264-1.053l-.001-4.674c0-.148-.001-.297-.015-.445-.065-.697-.404-1.222-1.03-1.538-.214-.108-.466-.145-.701-.215h-.297c-.1.02-.202.034-.301.059-.88.23-1.443.955-1.445 1.876q-.005 2.49 0 4.984c0 .518.163.978.527 1.358a1.896 1.896 0 0 0 2.999-.352M4.294 11.861c1.73.018 3.462.029 5.193.003a1.875 1.875 0 0 0 1.83-2.289c-.182-.871-.931-1.48-1.844-1.493-.441-.006-.882-.001-1.323-.001-1.273.001-2.547-.015-3.82.009-.736.014-1.282.389-1.613 1.046-.098.194-.14.418-.206.627v.396c.009.035.022.07.027.106.116.857.89 1.587 1.756 1.596M6.219 13.147q-.909-.002-1.818.001A1.88 1.88 0 0 0 2.62 14.42c-.047.135-.073.277-.11.416v.396c.009.022.022.044.025.068A1.89 1.89 0 0 0 4.75 16.91c.844-.142 1.525-.912 1.542-1.768.013-.634.005-1.269.006-1.904 0-.028-.008-.055-.013-.084q-.039-.006-.067-.007M10.25 3.187c-.198-.092-.425-.12-.639-.178h-.297q-.114.02-.228.044c-.918.202-1.525.98-1.502 1.924.023.966.813 1.783 1.776 1.813.643.02 1.287.008 1.93.01.023 0 .046-.008.068-.012 0-.684.031-1.36-.01-2.034-.045-.727-.437-1.259-1.099-1.567M9.518 13.15c-1.025-.04-1.92.796-1.932 1.822-.01.861-.003 1.723-.003 2.585q-.002 1.23 0 2.461-.001.198.025.394c.116.843.866 1.538 1.712 1.592 1.117.07 2.04-.777 2.044-1.892q.01-2.529 0-5.059c-.003-1.053-.795-1.86-1.846-1.903M19.719 13.158c-.882-.018-1.765-.004-2.647-.004s-1.765-.02-2.647.004c-1.113.03-1.954 1.096-1.757 2.192.173.957.929 1.587 1.917 1.588q2.493.002 4.985 0c.083 0 .166.003.247-.008a1.905 1.905 0 0 0 1.649-2.181c-.13-.853-.883-1.573-1.747-1.591M14.665 18.23c-.642-.02-1.285-.009-1.928-.01q-.041.002-.085.01-.01.029-.011.052c.004.675-.014 1.352.019 2.026.045.893.872 1.66 1.764 1.7a1.908 1.908 0 0 0 1.996-2.059c-.076-.905-.851-1.694-1.755-1.72M17.863 11.873l1.645-.001c.099 0 .199 0 .296-.012a1.903 1.903 0 0 0 1.663-2.18c-.163-1.056-1.23-1.802-2.265-1.56-.903.214-1.493.956-1.496 1.886a333 333 0 0 0 0 1.73c0 .042.003.082.005.137z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlackBold;