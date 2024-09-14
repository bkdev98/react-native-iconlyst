import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSquareTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.58 3.137h-.01M12.018 3.137h-.01M14.455 3.137h-.01M3.026 17.05c.313 2.234 1.795 3.804 4.047 4.067M16.892 21.117c2.252-.264 3.724-1.833 4.037-4.066M3.026 7.232C3.34 4.999 4.821 3.42 7.073 3.156M16.892 3.156c2.252.264 3.724 1.843 4.037 4.076M9.58 21.137h-.01M12.018 21.137h-.01M14.455 21.137h-.01M21.013 9.705v-.01M21.013 12.143v-.01M21.013 14.58v-.01M3.013 9.705v-.01M3.013 12.143v-.01M3.013 14.58v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.37 12.36 2.018-4.924a.31.31 0 0 1 .295-.206h2.705c.216 0 .368.214.296.418l-1.197 2.809a.314.314 0 0 0 .296.418h2.555c.269 0 .413.317.235.52l-4.85 5.536c-.219.25-.625.033-.54-.287l.926-3.468a.314.314 0 0 0-.303-.394H8.664a.314.314 0 0 1-.294-.422"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlashSquareTwoTone;
