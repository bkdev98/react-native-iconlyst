import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggBreakBold = ({
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
      d="M7.975 4.192a.196.196 0 0 0-.308-.037C6.373 5.465 5.473 7.058 4.776 8.78c-.784 1.936-1.267 3.935-1.002 6.043.537 4.288 4.437 7.46 8.786 7.163 4.37-.298 7.772-3.963 7.738-7.956-.028-1.715-.284-3.013-.72-4.271-.846-2.456-2.055-4.692-4.099-6.37-2.053-1.685-4.226-1.842-6.314-.478a.196.196 0 0 0-.059.267l3.069 5.018a.75.75 0 0 1-.08.845l-1.898 2.278a.2.2 0 0 0-.01.245l1.943 2.719a.75.75 0 0 1-1.221.871L8.54 11.84a.75.75 0 0 1 .034-.917l1.947-2.336a.2.2 0 0 0 .016-.233z"
    />
  </Svg>
);
export default IconlystEggBreakBold;
