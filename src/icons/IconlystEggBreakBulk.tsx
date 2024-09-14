import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggBreakBulk = ({
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
      d="M12.56 21.986c4.371-.298 7.773-3.963 7.738-7.956-.028-1.715-.284-3.013-.719-4.271-.847-2.456-2.055-4.692-4.1-6.37-2.248-1.846-4.64-1.859-6.91-.046-1.795 1.435-2.943 3.34-3.793 5.437-.784 1.936-1.266 3.935-1.001 6.043.536 4.288 4.437 7.46 8.785 7.163"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.683 3.456a.75.75 0 0 1 1.02.291l2.472 4.45a.75.75 0 0 1-.08.845l-1.997 2.397 2.032 2.845a.75.75 0 0 1-1.221.872L8.541 11.84a.75.75 0 0 1 .034-.916l2.04-2.447L8.39 4.476a.75.75 0 0 1 .292-1.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEggBreakBulk;
