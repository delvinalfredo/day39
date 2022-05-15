const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("2022-05-14", async () => {
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-05-14'));
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });
    const response = httpMocks.createResponse();
    await mathHandler.isWeekend(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: 6, 
        error: null
    });
});