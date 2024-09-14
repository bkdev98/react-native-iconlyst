import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeetRadishOutline = ({
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
      d="M12 9.321c-3.183 0-5.464 2.037-5.464 4.222 0 1.777 1.088 2.988 2.484 4.05.43.329.833.602 1.233.874.28.191.56.381.848.589.305.22.621.462.9.73.291-.285.623-.542.948-.777.268-.194.556-.39.844-.587l.185-.126a26 26 0 0 0 1.047-.745c1.377-1.045 2.44-2.229 2.44-4.008 0-2.184-2.282-4.222-5.465-4.222m-6.964 4.222c0-3.308 3.282-5.722 6.964-5.722s6.965 2.414 6.965 5.722c0 2.505-1.55 4.078-3.033 5.203a27 27 0 0 1-1.301.92c-.287.196-.554.378-.802.558-.632.457-1.003.807-1.16 1.116a.75.75 0 0 1-1.347-.018c-.125-.264-.465-.592-1.1-1.05a37 37 0 0 0-.74-.515c-.442-.301-.932-.636-1.37-.97-1.493-1.136-3.076-2.736-3.076-5.244"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.131 11.665a.75.75 0 0 1 .75-.75c1.44 0 2.905.96 2.905 2.474a.75.75 0 0 1-1.5 0c0-.39-.464-.974-1.405-.974a.75.75 0 0 1-.75-.75M9.984 3.438A2.3 2.3 0 0 1 12 2.25c.86 0 1.62.486 2.014 1.195 1.356-.368 2.942.586 2.942 2.207 0 .678-.316 1.2-.727 1.584-.393.367-.899.634-1.37.845-.306.138-.647.272-.96.396-.16.063-.314.123-.452.18-.414.17-.728.319-.942.468a.75.75 0 0 1-1.024-.013c-.17-.163-.463-.329-.897-.515-.209-.09-.431-.177-.669-.27l-.023-.009c-.226-.088-.466-.182-.699-.28-.47-.2-.987-.452-1.39-.805-.424-.372-.758-.89-.758-1.581 0-1.574 1.568-2.591 2.94-2.214m2.052 4.22c.273-.15.565-.276.842-.39q.27-.11.523-.208c.29-.114.566-.222.844-.347.43-.193.752-.38.96-.574.19-.177.25-.325.25-.487 0-.68-.891-1.049-1.37-.568a.75.75 0 0 1-1.281-.53A.82.82 0 0 0 12 3.75a.804.804 0 0 0-.804.804.75.75 0 0 1-1.28.53c-.479-.48-1.371-.113-1.371.568 0 .149.054.284.247.452.214.188.544.364.988.553.211.09.433.176.665.267l.015.006c.234.091.48.187.717.289.281.121.582.263.859.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBeetRadishOutline;