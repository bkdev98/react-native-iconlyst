import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike2Bold = ({
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
      d="M21.417 12.109a2.97 2.97 0 0 0-1.33-1.753c-.718-.422-1.763-.422-3.853-.422h-1.12c-.157 0-.231 0-.284-.032a.2.2 0 0 1-.084-.1.2.2 0 0 1-.018-.075c0-.053.029-.13.07-.247 1.383-4.317.306-5.985-1.066-6.27a3.2 3.2 0 0 0-.591-.043c-.296-.01-.444-.01-.602.053a1 1 0 0 0-.412.243c-.126.127-.21.285-.369.602-.603 1.185-1.75 3.308-2.816 4.62a.48.48 0 0 0-.082.432c.143.51.143 1.06.143 1.799v7.548c0 .405 0 .757-.027 1.077a.45.45 0 0 0 .238.444l.813.41c.316.159.485.243.654.307.148.052.317.084.475.116.18.02.36.02.718.02h4.508c1.108 0 1.657 0 2.122-.19a2.54 2.54 0 0 0 1.087-.823c.295-.4.443-.94.728-2.005l.507-1.89c.549-2.016.823-3.03.591-3.821M6.596 8.699c-.317-.159-.729-.159-1.552-.159h-.158c-.834 0-1.246 0-1.563.159-.285.147-.517.38-.665.665-.158.316-.158.728-.158 1.551v7.548c0 .824 0 1.235.158 1.552a1.5 1.5 0 0 0 .665.665c.317.159.729.159 1.563.159h.158c.824 0 1.235 0 1.552-.159a1.5 1.5 0 0 0 .665-.665c.158-.317.158-.728.158-1.552v-7.548c0-.823 0-1.235-.158-1.551a1.56 1.56 0 0 0-.665-.665"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLike2Bold;
