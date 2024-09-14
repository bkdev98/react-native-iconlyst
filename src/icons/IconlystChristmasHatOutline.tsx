import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasHatOutline = ({
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
      d="M11.023 8.765a.75.75 0 0 1 .989.385c.308.702.893 1.849 1.628 2.966.746 1.135 1.595 2.157 2.413 2.696a.75.75 0 1 1-.826 1.252c-1.08-.712-2.066-1.946-2.84-3.123a23 23 0 0 1-1.749-3.188.75.75 0 0 1 .385-.988M1.91 14.314c.37-1.784 1.876-2.24 2.724-2.215a.75.75 0 1 1-.043 1.5c-.397-.012-1.039.187-1.212 1.02-.086.414-.225 1.477-.03 2.465.19.97.647 1.689 1.636 1.878h.003c4.327.84 8.44.526 11.197 0 .301-.058.43-.138.507-.204.103-.087.179-.196.359-.456a.75.75 0 0 1 1.232.855l-.038.056c-.138.2-.323.469-.584.69-.313.265-.694.437-1.195.532-2.897.553-7.207.885-11.763 0-1.837-.351-2.576-1.784-2.827-3.062-.247-1.26-.073-2.544.034-3.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.55 6.898c-1.019-.83-2.566-1.419-4.863-1.022-2.182.376-3.495 1.812-4.268 3.561-.686 1.551-.915 3.295-.912 4.582 1.12.298 2.725.43 4.319.41.905-.011 1.78-.072 2.52-.17.757-.102 1.32-.237 1.634-.373a.75.75 0 0 1 .595 1.377c-.509.22-1.237.376-2.03.482-.81.108-1.745.172-2.7.184-1.885.024-3.96-.151-5.33-.65a.75.75 0 0 1-.491-.663c-.082-1.48.123-3.748 1.023-5.785.909-2.058 2.566-3.947 5.385-4.434 2.702-.466 4.693.221 6.065 1.338 1.343 1.092 2.043 2.554 2.282 3.6l.824 3.464a.75.75 0 0 1-1.46.347l-.826-3.474c-.175-.77-.72-1.922-1.767-2.774"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.53 12.693a1.894 1.894 0 0 1 2.528 0 .5.5 0 0 0 .273.114c.959.046 1.741.829 1.788 1.787a.5.5 0 0 0 .113.273c.644.71.644 1.817 0 2.528a.5.5 0 0 0-.113.273 1.894 1.894 0 0 1-1.788 1.788.5.5 0 0 0-.273.113 1.894 1.894 0 0 1-2.528 0 .5.5 0 0 0-.273-.113 1.894 1.894 0 0 1-1.787-1.788.48.48 0 0 0-.114-.273 1.894 1.894 0 0 1 0-2.528.48.48 0 0 0 .114-.273c.046-.958.829-1.74 1.787-1.787a.5.5 0 0 0 .273-.114m1.52 1.111a.394.394 0 0 0-.512 0c-.326.296-.768.48-1.208.5a.394.394 0 0 0-.362.363c-.021.44-.205.882-.5 1.208a.394.394 0 0 0 0 .512c.295.326.479.769.5 1.208.009.187.175.353.362.362.44.022.882.205 1.208.5a.394.394 0 0 0 .512 0c.326-.295.769-.478 1.209-.5a.394.394 0 0 0 .361-.362c.022-.44.205-.882.501-1.208a.394.394 0 0 0 0-.512 1.98 1.98 0 0 1-.5-1.208.394.394 0 0 0-.362-.362 1.98 1.98 0 0 1-1.209-.5M7.754 5.498a.75.75 0 0 1 1.05.15c.296.396.523.996.643 1.616.122.633.15 1.38-.031 2.092-.185.724-.596 1.434-1.36 1.896-.754.457-1.75.61-2.988.434a.75.75 0 0 1 .211-1.485c1.02.145 1.635-.01 2-.232.356-.215.573-.552.683-.984.114-.443.104-.96.012-1.437-.095-.49-.258-.85-.37-1a.75.75 0 0 1 .15-1.05M12.705 4.325a.75.75 0 0 1 .64.846c-.022.154.003.5.142.925.135.413.35.817.625 1.11.268.285.573.446.928.46.366.014.907-.124 1.645-.681a.75.75 0 0 1 .904 1.196c-.914.69-1.787 1.015-2.608.983-.831-.032-1.486-.426-1.96-.93-.466-.493-.777-1.11-.96-1.673-.18-.55-.266-1.138-.202-1.597a.75.75 0 0 1 .846-.64M9.966 18.228a.27.27 0 0 0-.34 0 1.766 1.766 0 0 1-2.257 0 .266.266 0 0 0-.34 0 .75.75 0 0 1-.96-1.153 1.766 1.766 0 0 1 2.258-.001l-.48.577.48-.577a.266.266 0 0 0 .34 0 1.77 1.77 0 0 1 2.257 0 .27.27 0 0 0 .34 0 .75.75 0 1 1 .959 1.154 1.77 1.77 0 0 1-2.257 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasHatOutline;