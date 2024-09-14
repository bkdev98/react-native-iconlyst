import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.904 15.3c.317.158.728.158 1.552.158h.158c.834 0 1.246 0 1.563-.158.285-.148.517-.38.665-.665.158-.317.158-.728.158-1.552V5.535c0-.823 0-1.235-.159-1.551a1.5 1.5 0 0 0-.665-.666c-.316-.158-.728-.158-1.562-.158h-.158c-.824 0-1.235 0-1.552.158a1.5 1.5 0 0 0-.665.666c-.158.316-.158.728-.158 1.551v7.548c0 .824 0 1.235.158 1.552.148.285.38.517.665.665"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.083 11.894c.2.74.686 1.362 1.33 1.753.718.422 1.763.422 3.853.422h1.12c.157 0 .231 0 .284.032.04.024.068.06.084.1q.017.036.018.075c0 .053-.029.13-.07.247-1.383 4.317-.306 5.985 1.066 6.27.158.032.37.043.591.043.296.01.444.01.602-.053.148-.042.306-.137.412-.243.126-.127.21-.285.369-.602.603-1.185 1.75-3.308 2.816-4.62a.48.48 0 0 0 .082-.432c-.143-.51-.143-1.06-.143-1.799V5.54c0-.405 0-.757.027-1.077a.45.45 0 0 0-.238-.444l-.813-.41c-.316-.159-.485-.243-.654-.307-.148-.052-.317-.084-.475-.116-.18-.02-.36-.02-.718-.02H8.118c-1.108 0-1.657 0-2.122.19a2.54 2.54 0 0 0-1.087.822c-.295.402-.443.94-.728 2.006l-.507 1.89c-.549 2.016-.823 3.03-.591 3.821"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbDislike2Bulk;
