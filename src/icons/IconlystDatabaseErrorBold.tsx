import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseErrorBold = ({
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
      d="M19.96 8.547c0-.142-.137-.214-.257-.14l-.248.155c-1.3.73-2.7 1.06-4.12 1.28-.67.1-1.34.16-2.01.21-1.3.09-2.59.05-3.88-.1-.94-.1-1.87-.27-2.78-.53-.72-.21-1.42-.46-2.08-.84a6 6 0 0 1-.26-.154.195.195 0 0 0-.298.167c.002.722.006 2.369-.002 3.257-.01.43.14.78.42 1.08.42.44.93.71 1.46.95.78.34 1.6.55 2.43.71.81.16 1.62.25 2.44.3 1.123.065 2.236.044 3.357-.08a.31.31 0 0 0 .27-.295q.004-.093.015-.185a3.003 3.003 0 0 1 2.978-2.64c.786 0 1.498.306 2.032.8.14.13.372.124.444-.054a1.5 1.5 0 0 0 .104-.566c-.008-.925-.01-2.638-.015-3.325M14.395 17.682v-.774a.304.304 0 0 0-.334-.301q-1.152.11-2.306.095c-.87 0-1.75-.05-2.61-.18-.74-.11-1.47-.25-2.2-.42-.85-.2-1.67-.5-2.44-.95l-.178-.11a.194.194 0 0 0-.3.166c.005.717.014 2.336-.002 3.214-.01.52.19.91.53 1.23.41.38.88.63 1.37.84.87.37 1.77.59 2.7.75.87.15 1.75.23 2.64.26.96.036 1.926.007 2.887-.092.178-.019.295-.19.274-.368a3 3 0 0 1-.02-.32 3 3 0 0 1 .308-1.389.34.34 0 0 0 0-.303 3 3 0 0 1-.319-1.348M4.542 6.443c.458.438 1.003.71 1.568.937 1.019.409 2.078.633 3.152.778.906.122 1.817.184 2.552.173 1.714.002 3.234-.142 4.73-.52.746-.188 1.475-.433 2.157-.82.375-.212.725-.461.996-.823.358-.48.364-1.04-.001-1.512a2.7 2.7 0 0 0-.424-.44c-.581-.474-1.25-.75-1.937-.978-1.224-.405-2.482-.605-3.754-.695-1.736-.124-3.465-.061-5.183.259-.933.173-1.848.416-2.72.827-.464.219-.907.48-1.263.882-.296.334-.47.715-.345 1.192.079.304.259.537.472.74M17.392 18.436a.75.75 0 0 0 .75-.75v-2.989a.75.75 0 0 0-1.5 0v2.99c0 .413.336.75.75.75M17.39 19.897c-.415.007-.745.377-.738.792a.75.75 0 0 0 .75.737h.012a.75.75 0 0 0 .738-.762v-.06c-.008-.414-.39-.726-.762-.707"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseErrorBold;