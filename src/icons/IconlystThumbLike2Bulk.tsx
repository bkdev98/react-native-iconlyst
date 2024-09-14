import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike2Bulk = ({
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
      d="M21.917 12.107a2.97 2.97 0 0 0-1.33-1.753c-.718-.422-1.763-.422-3.853-.422h-1.119c-.158 0-.232 0-.285-.032a.2.2 0 0 1-.084-.1.2.2 0 0 1-.018-.075c0-.053.029-.13.07-.247 1.383-4.317.306-5.985-1.066-6.27a3.2 3.2 0 0 0-.591-.043c-.296-.01-.443-.01-.602.053a1 1 0 0 0-.411.243c-.127.127-.212.285-.37.602-.603 1.185-1.75 3.308-2.816 4.62a.48.48 0 0 0-.082.432c.143.51.143 1.06.143 1.799v7.548c0 .405 0 .757-.027 1.077a.45.45 0 0 0 .238.444l.813.41c.317.159.485.243.654.307.148.052.317.084.475.116.18.02.36.02.718.02h4.508c1.108 0 1.657 0 2.122-.19a2.54 2.54 0 0 0 1.087-.823c.296-.4.443-.94.728-2.005l.507-1.89c.549-2.016.823-3.03.591-3.821"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.096 8.697c-.317-.158-.729-.158-1.552-.158h-.158c-.834 0-1.246 0-1.563.158-.285.148-.517.38-.665.665C3 9.68 3 10.091 3 10.914v7.548c0 .823 0 1.235.158 1.552.148.285.38.528.665.665.317.158.729.158 1.563.158h.158c.824 0 1.235 0 1.552-.158.285-.137.517-.38.665-.665.158-.317.158-.729.158-1.552v-7.548c0-.823 0-1.235-.158-1.552a1.56 1.56 0 0 0-.665-.665"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLike2Bulk;
