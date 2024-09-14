import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire2Bold = ({
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
      d="M16.782 20.911c-.288-.335-.793-.787-1.198-1.15a23 23 0 0 1-.558-.509c-1.242-1.193-1.609-2.677-1.098-4.43-3.036 2.03-2.24 4.883-2.199 5.022a.75.75 0 0 1-.501.933.747.747 0 0 1-.933-.494c-.017-.053-1.559-5.321 4.903-7.773a.75.75 0 0 1 .839.217c.205.244.234.59.073.864-1.556 2.65-.77 3.882-.045 4.579.137.132.32.295.519.473.457.409.973.872 1.326 1.279a6.86 6.86 0 0 0 1.664-4.576c0-.02 0-.056-.002-.091A11.17 11.17 0 0 0 17.13 8.14a17.8 17.8 0 0 0-6.702-4.733.5.5 0 0 0-.642.669s.507 1.128.588 1.323a5.27 5.27 0 0 1-.333 4.48 24 24 0 0 1-.488.741c-.479.709-1.031 1.524-1.39 2.323-.325-1.068-.685-2.639-.756-3.464a.498.498 0 0 0-.875-.285 8.6 8.6 0 0 0-2.1 5.993 7.6 7.6 0 0 0 2.97 5.642 8.1 8.1 0 0 0 4.432 1.499c.297.032.595.043.895.043h.009a6.9 6.9 0 0 0 4.089-1.427c-.014-.013-.032-.018-.045-.033"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFire2Bold;
