import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMugOutline = ({
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
      d="m7.59 5.591.001-.002zm.06-.068c.032-.03.08-.069.153-.116.254-.168.673-.348 1.256-.51 1.158-.323 2.8-.532 4.643-.532 1.844 0 3.486.21 4.643.532.584.162 1.002.342 1.257.51.072.047.12.087.153.116-.032.03-.08.069-.153.117-.255.167-.673.347-1.257.51-1.157.322-2.799.531-4.643.531s-3.485-.209-4.643-.531c-.583-.163-1.002-.343-1.256-.51a1 1 0 0 1-.153-.117m12.164.068V5.59zm0-.134v-.002zm-12.223 0v-.002zm1.066-2.005c1.322-.369 3.105-.587 5.045-.587s3.723.218 5.046.587c.655.182 1.24.413 1.679.702.408.27.876.716.876 1.37 0 .652-.468 1.1-.876 1.368-.439.29-1.024.52-1.68.703-1.322.368-3.105.586-5.045.586s-3.723-.218-5.045-.586c-.656-.183-1.24-.414-1.68-.703-.408-.269-.875-.716-.875-1.369s.467-1.1.876-1.369c.438-.289 1.023-.52 1.679-.702M13.703 10.6a.75.75 0 0 1 .75.75v5.278a.75.75 0 1 1-1.5 0V11.35a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.639 12.295a.75.75 0 0 1-.275 1.024l-4.571 2.64a.75.75 0 0 1-.75-1.3l4.571-2.639a.75.75 0 0 1 1.025.275"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.639 15.684a.75.75 0 0 0-.275-1.024l-4.571-2.64a.75.75 0 0 0-.75 1.3l4.571 2.639a.75.75 0 0 0 1.025-.275"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.602 5.522v12.211c0 1.027.54 1.773 1.594 2.305 1.091.55 2.67.827 4.506.827 1.829 0 3.408-.297 4.501-.859 1.066-.548 1.6-1.298 1.6-2.273V5.523h1.5v12.21c0 1.69-1 2.88-2.414 3.607-1.386.713-3.232 1.025-5.187 1.025-1.947 0-3.793-.287-5.182-.988-1.425-.72-2.418-1.915-2.418-3.644V5.523z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.709 7.51h.034a.75.75 0 0 1 0 1.5c-.633 0-1.058.001-1.383.03-.314.03-.461.08-.557.137a1.2 1.2 0 0 0-.44.439c-.056.096-.107.243-.135.557-.03.325-.03.75-.03 1.383v1.485c0 .633 0 1.057.03 1.383.028.314.08.461.136.557.106.182.257.333.439.44.096.056.243.107.557.135.325.03.75.03 1.383.03a.75.75 0 0 1 0 1.5h-.034c-.59 0-1.084 0-1.485-.036-.42-.038-.813-.122-1.177-.334a2.7 2.7 0 0 1-.98-.98c-.212-.363-.295-.756-.333-1.176-.037-.401-.037-.895-.037-1.485v-1.553c0-.59 0-1.084.037-1.485.038-.42.122-.813.334-1.177a2.7 2.7 0 0 1 .98-.98c.363-.212.756-.295 1.176-.333.401-.037.895-.037 1.485-.037"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasMugOutline;
