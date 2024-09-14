import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh1Bold = ({
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
      d="M12.915 4.164a8.03 8.03 0 0 0-7.483 5.001l-.511-1.209a1 1 0 0 0-1.842.78l1.608 3.803a1 1 0 0 0 1.311.532l3.783-1.6a1 1 0 0 0-.779-1.842l-1.9.804a6.04 6.04 0 0 1 5.813-4.269A6.09 6.09 0 0 1 19 12.25a6.09 6.09 0 0 1-6.085 6.085 6.12 6.12 0 0 1-5.02-2.632.999.999 0 1 0-1.642 1.14 8.12 8.12 0 0 0 6.662 3.492c4.458 0 8.085-3.627 8.085-8.085s-3.627-8.085-8.085-8.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefresh1Bold;
