import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaRainyOutline = ({
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
      d="M5.227 17.159a7.7 7.7 0 0 1 1.537.276 6 6 0 0 1 1.55.726c1.65-.615 3.016-.94 4.41-.937 1.391.003 2.754.333 4.399.935.544-.364 1.058-.617 1.629-.782a7 7 0 0 1 1.475-.238 7.534 7.534 0 0 0-15 .02m-1.532.7a9.033 9.033 0 1 1 18.066 0 .75.75 0 0 1-.736.75c-.82.015-1.374.07-1.857.21-.472.136-.918.364-1.494.786a.75.75 0 0 1-.71.096c-1.746-.665-3.012-.974-4.243-.977-1.23-.003-2.493.3-4.232.975a.75.75 0 0 1-.702-.085c-.534-.374-.97-.597-1.453-.742-.494-.148-1.076-.226-1.923-.264a.75.75 0 0 1-.716-.749"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.729 17.24a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-3.01a.75.75 0 0 1 .75-.75M12.729 7.294a.75.75 0 0 1 .75.75v1.532a.75.75 0 0 1-1.5 0V8.044a.75.75 0 0 1 .75-.75M17.491 2.292a.75.75 0 0 1 .462.955l-1.266 3.632a.75.75 0 0 1-1.417-.493l1.266-3.633a.75.75 0 0 1 .955-.461M9.525 2.292a.75.75 0 0 1 .461.955L8.67 7.027a.75.75 0 0 1-1.416-.494l1.317-3.78a.75.75 0 0 1 .955-.461M13.204 2.292a.75.75 0 0 1 .462.955l-.659 1.89a.75.75 0 1 1-1.416-.494l.658-1.89a.75.75 0 0 1 .955-.461M5.188 2.292a.75.75 0 0 1 .461.955L4.927 5.32a.75.75 0 1 1-1.417-.494l.723-2.073a.75.75 0 0 1 .955-.461M21.257 2.292a.75.75 0 0 1 .461.955l-.746 2.142a.75.75 0 0 1-1.417-.494l.747-2.142a.75.75 0 0 1 .955-.461"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrellaRainyOutline;
