import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenrateSearchAltOutline = ({
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
      d="M11.128 3.75a7.35 7.35 0 1 0 0 14.7 7.35 7.35 0 0 0 7.35-7.35.75.75 0 1 1 1.5 0 8.85 8.85 0 0 1-8.85 8.85 8.85 8.85 0 0 1-8.85-8.85 8.85 8.85 0 0 1 8.85-8.85.75.75 0 1 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.456 18.72a.765.765 0 1 0 0 1.53.765.765 0 0 0 0-1.53m-2.265.765a2.265 2.265 0 1 1 4.53 0 2.265 2.265 0 0 1-4.53 0M16.452 9.31a.75.75 0 0 0 .703-.49l.108-.292a3.28 3.28 0 0 1 1.934-1.936l.292-.108a.75.75 0 0 0 0-1.407l-.292-.108a3.28 3.28 0 0 1-1.933-1.936l-.108-.293a.75.75 0 0 0-1.408 0l-.108.293a3.28 3.28 0 0 1-1.933 1.936l-.292.108a.75.75 0 0 0 0 1.407l.292.108a3.28 3.28 0 0 1 1.933 1.936l.108.292a.75.75 0 0 0 .704.49m-1.103-3.53a4.8 4.8 0 0 0 1.103-1.104c.305.426.677.8 1.103 1.104a4.8 4.8 0 0 0-1.103 1.104 4.8 4.8 0 0 0-1.103-1.104M11.498 12.413a.75.75 0 0 0 .717-.532c.111-.365.396-.65.76-.76a.75.75 0 0 0 0-1.436 1.14 1.14 0 0 1-.76-.76.75.75 0 0 0-1.435 0c-.11.364-.396.65-.76.76a.75.75 0 0 0 0 1.435c.364.111.65.396.76.761a.75.75 0 0 0 .718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRegenrateSearchAltOutline;
